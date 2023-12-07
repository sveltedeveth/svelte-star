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
export type GiFluffySwirlProps = typeof __propDef.props;
export type GiFluffySwirlEvents = typeof __propDef.events;
export type GiFluffySwirlSlots = typeof __propDef.slots;
export default class GiFluffySwirl extends SvelteComponentTyped<GiFluffySwirlProps, GiFluffySwirlEvents, GiFluffySwirlSlots> {
}
export {};
