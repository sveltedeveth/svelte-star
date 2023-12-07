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
export type GiRoosterProps = typeof __propDef.props;
export type GiRoosterEvents = typeof __propDef.events;
export type GiRoosterSlots = typeof __propDef.slots;
export default class GiRooster extends SvelteComponentTyped<GiRoosterProps, GiRoosterEvents, GiRoosterSlots> {
}
export {};
