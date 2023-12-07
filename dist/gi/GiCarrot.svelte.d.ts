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
export type GiCarrotProps = typeof __propDef.props;
export type GiCarrotEvents = typeof __propDef.events;
export type GiCarrotSlots = typeof __propDef.slots;
export default class GiCarrot extends SvelteComponentTyped<GiCarrotProps, GiCarrotEvents, GiCarrotSlots> {
}
export {};
