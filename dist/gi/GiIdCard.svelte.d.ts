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
export type GiIdCardProps = typeof __propDef.props;
export type GiIdCardEvents = typeof __propDef.events;
export type GiIdCardSlots = typeof __propDef.slots;
export default class GiIdCard extends SvelteComponentTyped<GiIdCardProps, GiIdCardEvents, GiIdCardSlots> {
}
export {};
