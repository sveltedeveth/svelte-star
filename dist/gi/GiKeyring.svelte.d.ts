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
export type GiKeyringProps = typeof __propDef.props;
export type GiKeyringEvents = typeof __propDef.events;
export type GiKeyringSlots = typeof __propDef.slots;
export default class GiKeyring extends SvelteComponentTyped<GiKeyringProps, GiKeyringEvents, GiKeyringSlots> {
}
export {};
