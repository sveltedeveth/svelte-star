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
export type GiRunProps = typeof __propDef.props;
export type GiRunEvents = typeof __propDef.events;
export type GiRunSlots = typeof __propDef.slots;
export default class GiRun extends SvelteComponentTyped<GiRunProps, GiRunEvents, GiRunSlots> {
}
export {};
