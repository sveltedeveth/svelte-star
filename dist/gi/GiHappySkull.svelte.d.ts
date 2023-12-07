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
export type GiHappySkullProps = typeof __propDef.props;
export type GiHappySkullEvents = typeof __propDef.events;
export type GiHappySkullSlots = typeof __propDef.slots;
export default class GiHappySkull extends SvelteComponentTyped<GiHappySkullProps, GiHappySkullEvents, GiHappySkullSlots> {
}
export {};
