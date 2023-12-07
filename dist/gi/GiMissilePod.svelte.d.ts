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
export type GiMissilePodProps = typeof __propDef.props;
export type GiMissilePodEvents = typeof __propDef.events;
export type GiMissilePodSlots = typeof __propDef.slots;
export default class GiMissilePod extends SvelteComponentTyped<GiMissilePodProps, GiMissilePodEvents, GiMissilePodSlots> {
}
export {};
