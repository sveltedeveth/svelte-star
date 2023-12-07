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
export type GiJugglerProps = typeof __propDef.props;
export type GiJugglerEvents = typeof __propDef.events;
export type GiJugglerSlots = typeof __propDef.slots;
export default class GiJuggler extends SvelteComponentTyped<GiJugglerProps, GiJugglerEvents, GiJugglerSlots> {
}
export {};
