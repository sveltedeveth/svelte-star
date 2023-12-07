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
export type GiDeathSkullProps = typeof __propDef.props;
export type GiDeathSkullEvents = typeof __propDef.events;
export type GiDeathSkullSlots = typeof __propDef.slots;
export default class GiDeathSkull extends SvelteComponentTyped<GiDeathSkullProps, GiDeathSkullEvents, GiDeathSkullSlots> {
}
export {};
