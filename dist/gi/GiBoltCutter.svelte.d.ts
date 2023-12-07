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
export type GiBoltCutterProps = typeof __propDef.props;
export type GiBoltCutterEvents = typeof __propDef.events;
export type GiBoltCutterSlots = typeof __propDef.slots;
export default class GiBoltCutter extends SvelteComponentTyped<GiBoltCutterProps, GiBoltCutterEvents, GiBoltCutterSlots> {
}
export {};
