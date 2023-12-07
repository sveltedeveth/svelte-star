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
export type GiDiamondsProps = typeof __propDef.props;
export type GiDiamondsEvents = typeof __propDef.events;
export type GiDiamondsSlots = typeof __propDef.slots;
export default class GiDiamonds extends SvelteComponentTyped<GiDiamondsProps, GiDiamondsEvents, GiDiamondsSlots> {
}
export {};
