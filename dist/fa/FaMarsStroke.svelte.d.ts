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
export type FaMarsStrokeProps = typeof __propDef.props;
export type FaMarsStrokeEvents = typeof __propDef.events;
export type FaMarsStrokeSlots = typeof __propDef.slots;
export default class FaMarsStroke extends SvelteComponentTyped<FaMarsStrokeProps, FaMarsStrokeEvents, FaMarsStrokeSlots> {
}
export {};
