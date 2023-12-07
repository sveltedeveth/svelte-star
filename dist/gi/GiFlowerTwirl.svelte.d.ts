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
export type GiFlowerTwirlProps = typeof __propDef.props;
export type GiFlowerTwirlEvents = typeof __propDef.events;
export type GiFlowerTwirlSlots = typeof __propDef.slots;
export default class GiFlowerTwirl extends SvelteComponentTyped<GiFlowerTwirlProps, GiFlowerTwirlEvents, GiFlowerTwirlSlots> {
}
export {};
