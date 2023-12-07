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
export type GiTaurusProps = typeof __propDef.props;
export type GiTaurusEvents = typeof __propDef.events;
export type GiTaurusSlots = typeof __propDef.slots;
export default class GiTaurus extends SvelteComponentTyped<GiTaurusProps, GiTaurusEvents, GiTaurusSlots> {
}
export {};
