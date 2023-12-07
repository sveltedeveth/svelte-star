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
export type GiHealthNormalProps = typeof __propDef.props;
export type GiHealthNormalEvents = typeof __propDef.events;
export type GiHealthNormalSlots = typeof __propDef.slots;
export default class GiHealthNormal extends SvelteComponentTyped<GiHealthNormalProps, GiHealthNormalEvents, GiHealthNormalSlots> {
}
export {};
