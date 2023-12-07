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
export type GiDiabloSkullProps = typeof __propDef.props;
export type GiDiabloSkullEvents = typeof __propDef.events;
export type GiDiabloSkullSlots = typeof __propDef.slots;
export default class GiDiabloSkull extends SvelteComponentTyped<GiDiabloSkullProps, GiDiabloSkullEvents, GiDiabloSkullSlots> {
}
export {};
