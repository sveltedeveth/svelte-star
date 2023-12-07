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
export type GiLifeSupportProps = typeof __propDef.props;
export type GiLifeSupportEvents = typeof __propDef.events;
export type GiLifeSupportSlots = typeof __propDef.slots;
export default class GiLifeSupport extends SvelteComponentTyped<GiLifeSupportProps, GiLifeSupportEvents, GiLifeSupportSlots> {
}
export {};
