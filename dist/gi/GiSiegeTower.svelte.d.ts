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
export type GiSiegeTowerProps = typeof __propDef.props;
export type GiSiegeTowerEvents = typeof __propDef.events;
export type GiSiegeTowerSlots = typeof __propDef.slots;
export default class GiSiegeTower extends SvelteComponentTyped<GiSiegeTowerProps, GiSiegeTowerEvents, GiSiegeTowerSlots> {
}
export {};
