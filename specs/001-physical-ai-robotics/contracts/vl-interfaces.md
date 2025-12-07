# Vision-Language-Action (VLA) System Interfaces

This document describes the key interfaces and data flows within the Vision-Language-Action (VLA) system, as it processes human voice commands and environmental observations to generate robot actions. These interfaces define the 'contracts' for how different VLA components communicate.

## 1. Voice Input Interface

*   **Source**: Human User
*   **Output**: Raw Audio Stream
*   **Description**: The initial input to the VLA system is a human voice command, captured as a raw audio stream.

## 2. Speech-to-Text (STT) Interface (Whisper)

*   **Input**: Raw Audio Stream
*   **Output**: `transcribed_text` (String)
*   **Component**: Whisper (or similar STT model)
*   **Description**: Converts the raw audio input into a textual representation of the human command.
*   **Contract**:
    ```json
    {
      "transcribed_text": "Move the red block to the table"
    }
    ```

## 3. Language Understanding & Cognitive Planning Interface (LLM)

*   **Input**: `transcribed_text` (String), `vision_context` (JSON String)
*   **Output**: `cognitive_plan` (String), `robot_actions` (JSON Array of Objects)
*   **Component**: Large Language Model (LLM)
*   **Description**: The LLM takes the transcribed text and current visual context to understand the intent, decompose the task into a high-level cognitive plan, and translate it into a sequence of abstract robot actions.
*   **Input Contract (Example)**:
    ```json
    {
      "command": "Move the red block to the table",
      "current_scene": {
        "objects": [
          {"id": "block_1", "color": "red", "type": "block", "location": [0.1, 0.2, 0.0]},
          {"id": "table_1", "type": "table", "location": [0.5, 0.5, 0.0]}
        ]
      }
    }
    ```
*   **Output Contract (Example)**:
    ```json
    {
      "cognitive_plan": "User wants to move the red block to the table. This involves identifying the block, grasping it, moving to the table, and releasing it.",
      "robot_actions": [
        {"type": "detect_object", "params": {"color": "red", "object_type": "block"}},
        {"type": "grasp_object", "params": {"object_id": "block_1"}},
        {"type": "move_to_location", "params": {"target_id": "table_1"}},
        {"type": "release_object"}
      ]
    }
    ```

## 4. Vision System Interface

*   **Input**: Raw Image Stream (from `/camera/image_raw` ROS 2 topic)
*   **Output**: `vision_context` (JSON String)
*   **Component**: Object Detection, Pose Estimation, Scene Understanding Models
*   **Description**: Processes raw camera images to identify objects, their properties (color, type), and their spatial locations within the environment. This context is fed to the LLM.
*   **Output Contract (Example)**:
    ```json
    {
      "objects": [
        {"id": "block_1", "color": "red", "type": "block", "location": [0.1, 0.2, 0.0], "orientation": [0,0,0,1]},
        {"id": "table_1", "type": "table", "location": [0.5, 0.5, 0.0], "orientation": [0,0,0,1]}
      ],
      "robot_pose": {"position": [0,0,0], "orientation": [0,0,0,1]}
    }
    ```

## 5. Action Translation & Execution Interface (ROS 2)

*   **Input**: `robot_actions` (JSON Array of Objects from LLM)
*   **Output**: ROS 2 Topic/Service/Action Commands (e.g., `/vla/action_sequence`, `/robot/set_gripper_state`, `/robot/navigate_to_pose`)
*   **Component**: ROS 2 Action Translator Node
*   **Description**: Converts the abstract `robot_actions` from the LLM into concrete ROS 2 commands (topics, services, actions) that the physical robot or simulation can execute.
*   **Contract**: (Refer to `ros2_interfaces.md` for specific ROS 2 message definitions)

## Overall Data Flow

Human Voice → (Whisper) → Transcribed Text → (LLM + Vision Context) → Cognitive Plan + Abstract Robot Actions → (ROS 2 Action Translator) → Concrete ROS 2 Commands → Robot/Simulation Execution.
