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
export type GiIronMaskProps = typeof __propDef.props;
export type GiIronMaskEvents = typeof __propDef.events;
export type GiIronMaskSlots = typeof __propDef.slots;
export default class GiIronMask extends SvelteComponentTyped<GiIronMaskProps, GiIronMaskEvents, GiIronMaskSlots> {
}
export {};
