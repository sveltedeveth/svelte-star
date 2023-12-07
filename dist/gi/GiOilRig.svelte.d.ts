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
export type GiOilRigProps = typeof __propDef.props;
export type GiOilRigEvents = typeof __propDef.events;
export type GiOilRigSlots = typeof __propDef.slots;
export default class GiOilRig extends SvelteComponentTyped<GiOilRigProps, GiOilRigEvents, GiOilRigSlots> {
}
export {};
