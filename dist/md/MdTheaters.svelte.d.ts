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
export type MdTheatersProps = typeof __propDef.props;
export type MdTheatersEvents = typeof __propDef.events;
export type MdTheatersSlots = typeof __propDef.slots;
export default class MdTheaters extends SvelteComponentTyped<MdTheatersProps, MdTheatersEvents, MdTheatersSlots> {
}
export {};
