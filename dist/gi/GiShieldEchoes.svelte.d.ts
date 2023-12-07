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
export type GiShieldEchoesProps = typeof __propDef.props;
export type GiShieldEchoesEvents = typeof __propDef.events;
export type GiShieldEchoesSlots = typeof __propDef.slots;
export default class GiShieldEchoes extends SvelteComponentTyped<GiShieldEchoesProps, GiShieldEchoesEvents, GiShieldEchoesSlots> {
}
export {};
