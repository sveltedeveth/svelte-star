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
export type GiDreadSkullProps = typeof __propDef.props;
export type GiDreadSkullEvents = typeof __propDef.events;
export type GiDreadSkullSlots = typeof __propDef.slots;
export default class GiDreadSkull extends SvelteComponentTyped<GiDreadSkullProps, GiDreadSkullEvents, GiDreadSkullSlots> {
}
export {};
