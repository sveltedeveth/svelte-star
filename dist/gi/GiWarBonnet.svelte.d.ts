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
export type GiWarBonnetProps = typeof __propDef.props;
export type GiWarBonnetEvents = typeof __propDef.events;
export type GiWarBonnetSlots = typeof __propDef.slots;
export default class GiWarBonnet extends SvelteComponentTyped<GiWarBonnetProps, GiWarBonnetEvents, GiWarBonnetSlots> {
}
export {};
