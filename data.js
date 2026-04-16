const ML_TERMS = [
  // Fundamentals
  { term: "Machine Learning", category: "Fundamentals", wikiTitle: "Machine_learning" },
  { term: "Feature", category: "Fundamentals", wikiTitle: "Feature_(machine_learning)" },
  { term: "Training Data", category: "Fundamentals", wikiTitle: "Training,_validation,_and_test_data_sets" },
  { term: "Gradient Descent", category: "Fundamentals", wikiTitle: "Gradient_descent" },
  { term: "Loss Function", category: "Fundamentals", wikiTitle: "Loss_function" },
  { term: "Backpropagation", category: "Fundamentals", wikiTitle: "Backpropagation" },
  { term: "Hyperparameter", category: "Fundamentals", wikiTitle: "Hyperparameter_(machine_learning)" },
  { term: "Regularization", category: "Fundamentals", wikiTitle: "Regularization_(mathematics)" },
  { term: "Bias–Variance Tradeoff", category: "Fundamentals", wikiTitle: "Bias%E2%80%93variance_tradeoff" },
  { term: "Stochastic Gradient Descent", category: "Fundamentals", wikiTitle: "Stochastic_gradient_descent" },

  // Supervised Learning
  { term: "Linear Regression", category: "Supervised Learning", wikiTitle: "Linear_regression" },
  { term: "Logistic Regression", category: "Supervised Learning", wikiTitle: "Logistic_regression" },
  { term: "Decision Tree", category: "Supervised Learning", wikiTitle: "Decision_tree_learning" },
  { term: "Random Forest", category: "Supervised Learning", wikiTitle: "Random_forest" },
  { term: "Support Vector Machine", category: "Supervised Learning", wikiTitle: "Support_vector_machine" },
  { term: "Naive Bayes", category: "Supervised Learning", wikiTitle: "Naive_Bayes_classifier" },
  { term: "Gradient Boosting", category: "Supervised Learning", wikiTitle: "Gradient_boosting" },
  { term: "XGBoost", category: "Supervised Learning", wikiTitle: "XGBoost" },
  { term: "k-Nearest Neighbors", category: "Supervised Learning", wikiTitle: "K-nearest_neighbors_algorithm" },
  { term: "Ensemble Learning", category: "Supervised Learning", wikiTitle: "Ensemble_learning" },

  // Unsupervised Learning
  { term: "K-Means Clustering", category: "Unsupervised Learning", wikiTitle: "K-means_clustering" },
  { term: "Principal Component Analysis", category: "Unsupervised Learning", wikiTitle: "Principal_component_analysis" },
  { term: "Autoencoders", category: "Unsupervised Learning", wikiTitle: "Autoencoder" },
  { term: "DBSCAN", category: "Unsupervised Learning", wikiTitle: "DBSCAN" },
  { term: "Dimensionality Reduction", category: "Unsupervised Learning", wikiTitle: "Dimensionality_reduction" },
  { term: "t-SNE", category: "Unsupervised Learning", wikiTitle: "T-distributed_stochastic_neighbor_embedding" },
  { term: "Gaussian Mixture Model", category: "Unsupervised Learning", wikiTitle: "Mixture_model" },
  { term: "Anomaly Detection", category: "Unsupervised Learning", wikiTitle: "Anomaly_detection" },

  // Neural Networks & Deep Learning
  { term: "Neural Network", category: "Neural Networks", wikiTitle: "Artificial_neural_network" },
  { term: "Convolutional Neural Network", category: "Neural Networks", wikiTitle: "Convolutional_neural_network" },
  { term: "Recurrent Neural Network", category: "Neural Networks", wikiTitle: "Recurrent_neural_network" },
  { term: "Long Short-Term Memory", category: "Neural Networks", wikiTitle: "Long_short-term_memory" },
  { term: "Transformer", category: "Neural Networks", wikiTitle: "Transformer_(deep_learning_architecture)" },
  { term: "Generative Adversarial Network", category: "Neural Networks", wikiTitle: "Generative_adversarial_network" },
  { term: "Dropout", category: "Neural Networks", wikiTitle: "Dilution_(neural_networks)" },
  { term: "Batch Normalization", category: "Neural Networks", wikiTitle: "Batch_normalization" },
  { term: "Activation Function", category: "Neural Networks", wikiTitle: "Activation_function" },
  { term: "Attention Mechanism", category: "Neural Networks", wikiTitle: "Attention_(machine_learning)" },
  { term: "Transfer Learning", category: "Neural Networks", wikiTitle: "Transfer_learning" },
  { term: "Diffusion Model", category: "Neural Networks", wikiTitle: "Diffusion_model" },

  // Natural Language Processing
  { term: "Natural Language Processing", category: "NLP", wikiTitle: "Natural_language_processing" },
  { term: "Word Embedding", category: "NLP", wikiTitle: "Word_embedding" },
  { term: "Word2Vec", category: "NLP", wikiTitle: "Word2vec" },
  { term: "BERT", category: "NLP", wikiTitle: "BERT_(language_model)" },
  { term: "Large Language Model", category: "NLP", wikiTitle: "Large_language_model" },
  { term: "Tokenization", category: "NLP", wikiTitle: "Lexical_analysis" },
  { term: "Named Entity Recognition", category: "NLP", wikiTitle: "Named-entity_recognition" },
  { term: "Sentiment Analysis", category: "NLP", wikiTitle: "Sentiment_analysis" },

  // Reinforcement Learning
  { term: "Reinforcement Learning", category: "Reinforcement Learning", wikiTitle: "Reinforcement_learning" },
  { term: "Q-Learning", category: "Reinforcement Learning", wikiTitle: "Q-learning" },
  { term: "Policy Gradient", category: "Reinforcement Learning", wikiTitle: "Reinforcement_learning#Direct_policy_search" },
  { term: "Markov Decision Process", category: "Reinforcement Learning", wikiTitle: "Markov_decision_process" },
  { term: "Exploration vs Exploitation", category: "Reinforcement Learning", wikiTitle: "Exploration-exploitation_dilemma" },

  // Model Evaluation
  { term: "Overfitting", category: "Model Evaluation", wikiTitle: "Overfitting" },
  { term: "Underfitting", category: "Model Evaluation", wikiTitle: "Overfitting" },
  { term: "Cross-Validation", category: "Model Evaluation", wikiTitle: "Cross-validation_(statistics)" },
  { term: "Confusion Matrix", category: "Model Evaluation", wikiTitle: "Confusion_matrix" },
  { term: "ROC Curve", category: "Model Evaluation", wikiTitle: "Receiver_operating_characteristic" },
  { term: "Precision and Recall", category: "Model Evaluation", wikiTitle: "Precision_and_recall" },
  { term: "F1 Score", category: "Model Evaluation", wikiTitle: "F-score" },
  { term: "Mean Squared Error", category: "Model Evaluation", wikiTitle: "Mean_squared_error" },
];

const CATEGORIES = ["All", ...new Set(ML_TERMS.map(t => t.category))];
