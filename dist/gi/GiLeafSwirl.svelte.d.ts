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
export type GiLeafSwirlProps = typeof __propDef.props;
export type GiLeafSwirlEvents = typeof __propDef.events;
export type GiLeafSwirlSlots = typeof __propDef.slots;
export default class GiLeafSwirl extends SvelteComponentTyped<GiLeafSwirlProps, GiLeafSwirlEvents, GiLeafSwirlSlots> {
}
export {};
