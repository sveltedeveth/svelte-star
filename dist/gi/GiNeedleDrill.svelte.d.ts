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
export type GiNeedleDrillProps = typeof __propDef.props;
export type GiNeedleDrillEvents = typeof __propDef.events;
export type GiNeedleDrillSlots = typeof __propDef.slots;
export default class GiNeedleDrill extends SvelteComponentTyped<GiNeedleDrillProps, GiNeedleDrillEvents, GiNeedleDrillSlots> {
}
export {};
