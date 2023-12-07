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
export type GiTrenchAssaultProps = typeof __propDef.props;
export type GiTrenchAssaultEvents = typeof __propDef.events;
export type GiTrenchAssaultSlots = typeof __propDef.slots;
export default class GiTrenchAssault extends SvelteComponentTyped<GiTrenchAssaultProps, GiTrenchAssaultEvents, GiTrenchAssaultSlots> {
}
export {};
