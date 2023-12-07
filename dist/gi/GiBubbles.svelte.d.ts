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
export type GiBubblesProps = typeof __propDef.props;
export type GiBubblesEvents = typeof __propDef.events;
export type GiBubblesSlots = typeof __propDef.slots;
export default class GiBubbles extends SvelteComponentTyped<GiBubblesProps, GiBubblesEvents, GiBubblesSlots> {
}
export {};
