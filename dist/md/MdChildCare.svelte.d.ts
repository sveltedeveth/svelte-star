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
export type MdChildCareProps = typeof __propDef.props;
export type MdChildCareEvents = typeof __propDef.events;
export type MdChildCareSlots = typeof __propDef.slots;
export default class MdChildCare extends SvelteComponentTyped<MdChildCareProps, MdChildCareEvents, MdChildCareSlots> {
}
export {};
