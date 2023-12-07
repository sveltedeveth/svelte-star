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
export type GiDrowningProps = typeof __propDef.props;
export type GiDrowningEvents = typeof __propDef.events;
export type GiDrowningSlots = typeof __propDef.slots;
export default class GiDrowning extends SvelteComponentTyped<GiDrowningProps, GiDrowningEvents, GiDrowningSlots> {
}
export {};
