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
export type MdLocalMoviesProps = typeof __propDef.props;
export type MdLocalMoviesEvents = typeof __propDef.events;
export type MdLocalMoviesSlots = typeof __propDef.slots;
export default class MdLocalMovies extends SvelteComponentTyped<MdLocalMoviesProps, MdLocalMoviesEvents, MdLocalMoviesSlots> {
}
export {};
