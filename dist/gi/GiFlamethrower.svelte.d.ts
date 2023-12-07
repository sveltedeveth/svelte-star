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
export type GiFlamethrowerProps = typeof __propDef.props;
export type GiFlamethrowerEvents = typeof __propDef.events;
export type GiFlamethrowerSlots = typeof __propDef.slots;
export default class GiFlamethrower extends SvelteComponentTyped<GiFlamethrowerProps, GiFlamethrowerEvents, GiFlamethrowerSlots> {
}
export {};
