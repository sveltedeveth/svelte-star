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
export type GiStakesFenceProps = typeof __propDef.props;
export type GiStakesFenceEvents = typeof __propDef.events;
export type GiStakesFenceSlots = typeof __propDef.slots;
export default class GiStakesFence extends SvelteComponentTyped<GiStakesFenceProps, GiStakesFenceEvents, GiStakesFenceSlots> {
}
export {};
