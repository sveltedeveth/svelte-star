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
export type GiFlakeProps = typeof __propDef.props;
export type GiFlakeEvents = typeof __propDef.events;
export type GiFlakeSlots = typeof __propDef.slots;
export default class GiFlake extends SvelteComponentTyped<GiFlakeProps, GiFlakeEvents, GiFlakeSlots> {
}
export {};
