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
export type GiBombingRunProps = typeof __propDef.props;
export type GiBombingRunEvents = typeof __propDef.events;
export type GiBombingRunSlots = typeof __propDef.slots;
export default class GiBombingRun extends SvelteComponentTyped<GiBombingRunProps, GiBombingRunEvents, GiBombingRunSlots> {
}
export {};
