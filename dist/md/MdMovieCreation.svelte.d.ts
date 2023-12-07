import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MdMovieCreationProps = typeof __propDef.props;
export type MdMovieCreationEvents = typeof __propDef.events;
export type MdMovieCreationSlots = typeof __propDef.slots;
export default class MdMovieCreation extends SvelteComponentTyped<MdMovieCreationProps, MdMovieCreationEvents, MdMovieCreationSlots> {
}
export {};
