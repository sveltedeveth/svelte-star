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
export type MdMovieProps = typeof __propDef.props;
export type MdMovieEvents = typeof __propDef.events;
export type MdMovieSlots = typeof __propDef.slots;
export default class MdMovie extends SvelteComponentTyped<MdMovieProps, MdMovieEvents, MdMovieSlots> {
}
export {};
