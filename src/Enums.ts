
/**
 * Enum for Digital Business Card Form
 */
export enum CardFormEnum {
    Image = "UPDATE_IMAGE",
    Name = "UPDATE_NAME",
    JobPosition = "UPDATE_JOB_POSITION",
    PersonalLink = "UPDATE_PERSONAL_LINK",
    EmailLink = "UPDATE_EMAIL_LINK",
    LinkedInLink = "UPDATE_LINKEDIN_LINK",
    AboutText = "UPDATE_ABOUT_TEXT",
    InterestsText = "UPDATE_INTERESTS_TEXT",
    TwitterLink = "UPDATE_TWITTER_LINK",
    FacebookLink = "UPDATE_FACEBOOK_LINK",
    InstagramLink = "UPDATE_INSTAGRAM_LINK",
    GithubLink = "UPDATE_GITHUB_LINK",
    ResetCard = "RESET_CARD",
    FillCard = "FILL_CARD",
}

/**
 * Enum for Jokes Page
 */
export enum JokeEnum {
    BestRated = "SORT_BY_BEST_RATED",
    MostUpvotes = "SORT_BY_MOST_UPVOTES",
    LeastUpvotes ="SORT_BY_LEAST_UPVOTES",
    MostDownvotes = "SORT_BY_MOST_DOWNVOTES",
    LeastDownvotes = "SORT_BY_LEAST_DOWNVOTES",
    JokesOnly = "ONLY_JOKES",
    PunsOnly = "ONLY_PUNS",
    ClearFilter = "CLEAR_FILTER",
}

/**
 * Enum for Notes App Page
 */
export enum NotesEnum {
    SetState = "SET_STATE",
    CreateNote = "CREATE_NOTE",
    UpdateNoteTitle = "UPDATE_NOTE_TITLE",
    UpdateNoteBody = "UPDATE_NOTE_BODY",
    UpdateEdit = "UPDATE_EDIT",
    UpdateCurrentNoteId = "UPDATE_CURRENT_NOTE_ID",
    ChangeDarkMode = "CHANGE_DARK_MODE",
    DeleteNote = "DELETE_NOTE",
    EditNoteTitle = "EDIT_NOTE_TITLE",
}

/**
 * Enum for Tenzies Page
 */
export enum TenziesEnum {
    NewDice = "NEW_DICE",
    RollDice = "ROLL_DICE",
    HoldDie = "HOLD_DIE",
    ChangeTenzies = "CHANGE_TENZIES_VALUE",
    NewGame = "NEW_GAME",
}

/**
 * Enum for Quizzical Pages
 */
export enum QuizzicalEnum {
    SetApi = "SET_API",
    SetFormAmount = "SET_FORM_AMOUNT",
    SetFormCategory = "SET_FORM_CATEGORY",
    SetFormDifficulty = "SET_FORM_DIFFICULTY",
    SetFormType = "SET_FORM_TYPE",
}

/**
 * Enum for Quizzical Quiz
 */
export enum QuizEnum {
    SetUp = "SETUP_QUIZ",
    SetAnswer = "SELECTED_ANSWER",
    SubmitQuiz = "SUBMIT_QUIZ",
    NewQuiz = "NEW_QUIZ",
}

/**
 * Enum for Taskify Todo Lists
 */

export enum TaskifyEnum {
    AddToDoItem = "ADD_TODO_ITEM",
    SetEdit = "SET_TODO_ITEM_EDIT",
    SetDone = "SET_TODO_DONE",
    DeleteTodo = "DELETE_TODO_ITEM",
    DragTodo = "DRAG_TODO_ITEM",
}