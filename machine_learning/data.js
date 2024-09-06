const topics = {
    machineLearning: {
        title: "Chapter 1: Machine Learning",
        sections: [
            {
                title: "1. Why Machine Learning?",
                content: `Machine Learning (ML) has gained prominence due to several factors:

    1.1. Recent Progress in Algorithms and Theory
    - Advancements in deep learning, reinforcement learning, and ensemble methods
    - Improved theoretical understanding of ML capabilities and limitations

    1.2. Abundance of Online Data
    - Surge in data generation from various sources (social media, e-commerce, sensors, etc.)
    - Rich data serves as the foundation for ML algorithms

    1.3. Availability of Computational Power
    - Advancements in hardware (GPUs, specialized processors)
    - Cloud computing platforms offering scalable resources

    1.4. Emerging Industry Applications
    - Healthcare: diagnostic tools
    - Finance: fraud detection
    - Transportation: autonomous vehicles
    - Entertainment: recommendation systems`
            },
            {
                title: "2. Three Niches for Machine Learning",
                content: `2.1. Data Mining
    - Extracting meaningful patterns from large datasets
    - Example: Analyzing medical records for disease trends

    2.2. Software Applications Beyond Manual Programming
    - Complex applications that are difficult to program explicitly
    - Examples: Autonomous driving systems, speech recognition

    2.3. Self-Customizing Programs
    - Applications that adapt to user behavior and preferences
    - Example: News aggregators that learn user interests`
            },
            {
                title: "3. Defining the Learning Problem",
                content: `3.1. Well-Defined Learning Problems
    A learning problem is defined by three components:
    - Task (T): What the system needs to do
    - Performance Measure (P): How success is quantified
    - Experience (E): Data or interactions for learning

    Example: Learning to play checkers
    - T: Play the game of checkers
    - P: Percentage of games won in a tournament
    - E: Opportunities to play against oneself or other players

    3.2. Key Questions in Machine Learning
    When approaching a learning problem, consider:
    - What is the task?
    - What is the performance measure?
    - What is the experience?
    - What hypothesis space?
    - What learning algorithm?`
            },
            {
                title: "4. Typical Data Mining Tasks",
                content: `4.1. Classification
    - Assigning items to predefined categories
    - Example: Spam email detection

    4.2. Regression
    - Predicting continuous values
    - Example: Stock price forecasting

    4.3. Clustering
    - Grouping similar items without predefined categories
    - Example: Market segmentation

    4.4. Association Rule Learning
    - Discovering relationships between variables
    - Example: Identifying items frequently bought together

    4.5. Anomaly Detection
    - Identifying unusual patterns
    - Example: Fraud detection in financial transactions`
            },
            {
                title: "5. Example Data Mining Task: Cesarean Section Prediction",
                content: `5.1. Problem Statement
    Predict the likelihood of an emergency Cesarean section based on patient data.

    5.2. Data Description
    - 9,714 patient records
    - 215 attributes per record (age, medical history, ultrasound results, etc.)
    - Outcome variables: Elective C-Section, Emergency C-Section

    5.3. Learning Objective
    Develop a model to predict emergency C-section likelihood for proactive planning.

    5.4. Example Rule Learned
    \`\`\`
    If (no previous vaginal deliveries) AND 
       (abnormal second-trimester ultrasound) AND 
       (malpresentation at admission)
    Then
       Probability of emergency C-section = 60%
    \`\`\`
    Performance: 63% accuracy on training data, 60% on test data.`
            },
            {
                title: "6. Credit Risk Analysis",
                content: `6.1. Problem Statement
    Assess customer profitability and credit eligibility based on financial and demographic data.

    6.2. Data Description
    - Customer attributes: home ownership, delinquent accounts, loan balance, income, etc.
    - Outcome variable: Customer profitability (accept/deny credit card application)

    6.3. Learning Objective
    Create a predictive model for credit risk evaluation.

    6.4. Example Rules Learned
    \`\`\`
    Rule 1:
    If (delinquent accounts > 2) AND (delinquent billing cycles > 1)
    Then Customer is not profitable (Deny Credit Card Application)

    Rule 2:
    If (delinquent accounts = 0) AND 
       (income > $30k OR years of credit > 3)
    Then Customer is profitable (Accept Credit Card Application)
    \`\`\``
            },
            {
                title: "7. Other Prediction Problems",
                content: `7.1. Customer Purchase Behavior
    Predict likelihood of purchasing a specific product.
    Features: Demographics, current product ownership, computer type, etc.

    7.2. Customer Retention
    Predict customer churn.
    Features: Age, sex, income, account balances, transaction history, etc.

    7.3. Process Optimization
    Improve manufacturing processes by predicting quality attributes.
    Features: Viscosity, fat content, mixing speed, temperature, density, etc.`
            },
            {
                title: "8. Problems Too Difficult to Program by Hand",
                content: `8.1. Autonomous Driving (Example: ALVINN)
    ALVINN (Autonomous Land Vehicle In a Neural Network):
    - Capable of driving at speeds up to 70 mph on highways
    - Architecture:
      - Inputs: 30x32 sensor inputs
      - Hidden Layer: 4 hidden units
      - Outputs: 30 units determining steering actions
    - Functionality: Real-time decision making for lane keeping, obstacle avoidance, and navigation`
            },
            {
                title: "9. Software that Customizes to User",
                content: `9.1. Adaptive Systems
    - Recommendation Engines: Suggest products, movies, or content
    - Adaptive Interfaces: Modify UI based on user behavior

    9.2. Example Application
    Wisewire: A platform that learns user interests to curate personalized content and recommendations.`
            },
            {
                title: "10. Future Directions in Machine Learning",
                content: `10.1. Current Status: Tip of the Iceberg
    Today's applications represent just the beginning of ML's potential impact.

    10.2. Opportunities for Tomorrow
    - Mixed-Media Learning: Integrating diverse data types (text, images, audio, video)
    - Cross-Database Learning: Combining information from multiple sources
    - Active Experimentation: Systems that learn through trial and error
    - Decision-Making Over Prediction: Focus on informed decision-making
    - Cumulative, Lifelong Learning: Continuous adaptation without forgetting
    - Learning-Embedded Programming Languages: Languages with inherent learning capabilities`
            },
            {
                title: "11. Relevant Disciplines",
                content: `Machine Learning draws from various fields:
    - Artificial Intelligence (AI)
    - Bayesian Methods
    - Computational Complexity Theory
    - Control Theory
    - Information Theory
    - Philosophy, Psychology, and Neurobiology
    - Statistics`
            },
            {
                title: "12. What is the Learning Problem?",
                content: `12.1. Definition of Learning
    Improving performance at a task through experience.

    12.2. Components of the Learning Problem
    - Task (T): Specific activity to perform
    - Performance Measure (P): Metric for evaluating success
    - Experience (E): Data or interactions for learning

    12.3. Example: Learning to Play Checkers
    - T: Develop a system to play checkers
    - P: Percentage of games won in tournaments
    - E: Playing numerous games to improve strategy`
            },
            {
                title: "13. Type of Training Experience",
                content: `13.1. Direct vs. Indirect Training
    - Direct: Learning from explicit input-output pairs
    - Indirect: Inferring patterns without explicit labeling

    13.2. Supervised vs. Unsupervised Learning
    - Supervised: Learning from labeled data
    - Unsupervised: Finding patterns in unlabeled data

    13.3. Teacher vs. No Teacher
    - Teacher (Supervised): Guiding signal provides correct answers
    - No Teacher (Unsupervised/Reinforcement): Learning from raw data or environment interaction

    13.4. Representativeness of Training Experience
    Ensure training data covers scenarios the system will encounter in real-world applications.`
            },
            {
                title: "14. Choose the Target Function",
                content: `14.1. Defining the Target Function (V)
    Maps inputs to desired outputs.

    14.2. Example: Checkers Move Selection
    - Move Function: ChooseMove(board) → move
    - Value Function: V(board) assigns value to board states

    14.3. Considerations for Target Function Design
    - Accuracy: Represent desired outcomes correctly
    - Operationality: Usable within the learning algorithm`
            },
            {
                title: "15. Possible Definitions for the Target Function V",
                content: `15.1. Comprehensive Value Assignment
    For a board state b in checkers:
    \`\`\`
    If b is a winning state: V(b) = 100
    If b is a losing state: V(b) = -100
    If b is a draw state: V(b) = 0
    If b is not a final state: V(b) = V(b'), where b' is the best achievable final state
    \`\`\`

    15.2. Operational Challenges
    - Complexity: Calculating best achievable state is computationally intensive
    - Non-Operational: Not directly usable for real-time decisions`
            },
            {
                title: "16. Choose Representation for the Target Function",
                content: `16.1. Representation Choices
    - Rule-Based Systems: If-then rules
    - Neural Networks: Interconnected nodes
    - Polynomial Functions: Nonlinear relationships of board features

    16.2. Feature Selection
    Choose relevant features to represent the board state, e.g.:
    - Number of Black Pieces (bp(b))
    - Number of Red Pieces (rp(b))
    - Number of Black Kings (bk(b))
    - Number of Red Kings (rk(b))
    - Number of Threatened Pieces (bt(b), rt(b))`
            },
            {
                title: "17. A Representation for the Learned Function",
                content: `17.1. Linear Function of Features
    \`\`\`
    V(b) = w0 + w1·bp(b) + w2·rp(b) + w3·bk(b) + w4·rk(b) + w5·bt(b) + w6·rt(b)
    \`\`\`
    Where:
    - w: Weights determining feature importance
    - bp(b): Number of black pieces
    - rp(b): Number of red pieces
    - bk(b): Number of black kings
    - rk(b): Number of red kings
    - bt(b): Number of red pieces threatened by black
    - rt(b): Number of black pieces threatened by red`
            },
            {
                title: "18. Obtaining Training Examples",
                content: `18.1. True Target Function (V) vs. Learned Function (V̂)
    - V(b): Actual value of board state b
    - V̂(b): Estimated value by learned function

    18.2. Training Data Strategy
    \`\`\`
    Vtrain(b) = V̂(Successor(b))
    \`\`\`
    Where Successor(b) is the best possible move from state b.

    18.3. Example Training Rule
    For each board state b:
    1. Determine best successor state after optimal move
    2. Assign Vtrain(b) based on successor state value`
            },
            {
                title: "19. Choose Weight Tuning Rule",
                content: `19.1. Learning Algorithm: Least Mean Squares (LMS)
    Adjusts weights to minimize error between predicted and actual values.

    19.2. Weight Update Procedure
    1. Select Training Example: Choose random board state b
    2. Compute Error: error(b) = Vtrain(b) - V̂(b)
    3. Update Weights: For each feature fi:
       \`\`\`
       wi ← wi + c · fi · error(b)
       \`\`\`
       Where c is a small constant (e.g., 0.1) controlling learning rate.

    19.3. Iterative Process
    Repeat selection and update steps multiple times to converge weights.`
            },
            {
                title: "20. Design Choices in Machine Learning Systems",
                content: `Key decisions in designing ML systems:
    1. Determine the Target Function
    2. Choose Representation of Learned Function
    3. Decide on Type of Training Experience
    4. Select Learning Algorithm
    5. Interaction with Environment
    6. Integration of Knowledge Sources
    7. System Adaptability`
            },
            {
                title: "21. Some Issues in Machine Learning",
                content: `Key challenges and considerations in ML:
    1. Function Approximation: Algorithms for complex function approximation
    2. Influence of Training Examples: Impact of data quantity and quality
    3. Hypothesis Representation Complexity: Balancing complexity and overfitting
    4. Impact of Noisy Data: Handling noise in training data
    5. Theoretical Limits of Learnability: Fundamental limits of learning from data
    6. Incorporating Prior Knowledge: Integrating domain expertise
    7. Biological Learning Insights: Inspiration from natural learning processes
    8. Adaptive Representations: Dynamic alteration of internal representations`
            }
        ]
    }



    };