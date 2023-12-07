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
export type GiTinkerProps = typeof __propDef.props;
export type GiTinkerEvents = typeof __propDef.events;
export type GiTinkerSlots = typeof __propDef.slots;
export default class GiTinker extends SvelteComponentTyped<GiTinkerProps, GiTinkerEvents, GiTinkerSlots> {
}
export {};
