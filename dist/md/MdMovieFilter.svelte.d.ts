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
export type MdMovieFilterProps = typeof __propDef.props;
export type MdMovieFilterEvents = typeof __propDef.events;
export type MdMovieFilterSlots = typeof __propDef.slots;
export default class MdMovieFilter extends SvelteComponentTyped<MdMovieFilterProps, MdMovieFilterEvents, MdMovieFilterSlots> {
}
export {};
