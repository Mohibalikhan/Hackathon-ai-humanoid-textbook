# Quickstart Guide: Physical AI & Humanoid Robotics Book

This guide provides a quick overview of how to set up your development environment, build the Docusaurus website, and run initial code examples for the "Physical AI & Humanoid Robotics" book. It assumes you have a basic understanding of command-line operations and development environments.

## 1. Prerequisites

Ensure you have the following software installed on your system:

*   **Git**: For cloning the repository.
*   **Node.js & npm**: Required for Docusaurus (LTS version recommended).
*   **Python 3.x**: For ROS 2 examples and LLM integrations.
*   **C++ Compiler (e.g., g++)**: For ROS 2 C++ components.
*   **ROS 2 (Humble Hawksbill or later)**: Install the full desktop version on Ubuntu (refer to official ROS 2 documentation).
*   **Docker & NVIDIA Container Toolkit**: For NVIDIA Isaac Sim (highly recommended for GPU acceleration).
*   **Gazebo / Ignition Gazebo**: Typically installed with ROS 2, or as a standalone simulation environment.
*   **Unity Hub & Unity Editor (LTS version)**: For Unity-based simulations.
*   **NVIDIA Isaac Sim**: Installation via Omniverse Launcher (requires NVIDIA GPU).

## 2. Setting Up the Repository

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-org/physical-ai-robotics-book.git
    cd physical-ai-robotics-book
    ```
2.  **Install Docusaurus dependencies**:
    ```bash
    npm install
    ```
3.  **Install Python dependencies** (for ROS 2 examples, LLM integrations):
    ```bash
    pip install -r requirements.txt
    ```
    (Create a `requirements.txt` in `code_examples/` with necessary Python packages like `rclpy`, `torch`, `transformers`, `whisper`, etc., as needed for specific examples).

## 3. Building and Running the Docusaurus Website

To build the book's website and view it locally:

1.  **Build the site**:
    ```bash
    npm run build
    ```
2.  **Serve the site locally**:
    ```bash
    npm run serve
    ```
    This will typically open the site in your web browser at `http://localhost:3000`.

## 4. Running a Basic ROS 2 Example

This section assumes you have ROS 2 and your development environment sourced correctly. (Further detailed examples will be in `code_examples/ros2/`)

1.  **Source your ROS 2 environment** (if not already done):
    ```bash
    source /opt/ros/humble/setup.bash
    source install/setup.bash # If you have local ROS 2 packages
    ```
2.  **Navigate to a ROS 2 example workspace**:
    ```bash
    cd code_examples/ros2/minimal_publisher_subscriber
    ```
3.  **Build the ROS 2 package**:
    ```bash
    colcon build
    source install/setup.bash
    ```
4.  **Run the publisher node**:
    ```bash
    ros2 run minimal_publisher_subscriber publisher_node
    ```
5.  **In a new terminal, run the subscriber node**:
    ```bash
    source /opt/ros/humble/setup.bash
    source install/setup.bash
    ros2 run minimal_publisher_subscriber subscriber_node
    ```
    You should see messages being published and received by the respective nodes.

## 5. Next Steps

*   Explore the `docs/` directory for the book's content.
*   Dive into specific technology examples in `code_examples/`.
*   Refer to the `constitution.md` for project principles and `plan.md` for the overall implementation plan.
