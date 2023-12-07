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
export type GiFlameSpinProps = typeof __propDef.props;
export type GiFlameSpinEvents = typeof __propDef.events;
export type GiFlameSpinSlots = typeof __propDef.slots;
export default class GiFlameSpin extends SvelteComponentTyped<GiFlameSpinProps, GiFlameSpinEvents, GiFlameSpinSlots> {
}
export {};
