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
export type GiFangedSkullProps = typeof __propDef.props;
export type GiFangedSkullEvents = typeof __propDef.events;
export type GiFangedSkullSlots = typeof __propDef.slots;
export default class GiFangedSkull extends SvelteComponentTyped<GiFangedSkullProps, GiFangedSkullEvents, GiFangedSkullSlots> {
}
export {};
