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
export type GiLifeBarProps = typeof __propDef.props;
export type GiLifeBarEvents = typeof __propDef.events;
export type GiLifeBarSlots = typeof __propDef.slots;
export default class GiLifeBar extends SvelteComponentTyped<GiLifeBarProps, GiLifeBarEvents, GiLifeBarSlots> {
}
export {};
