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
export type GiLightSabersProps = typeof __propDef.props;
export type GiLightSabersEvents = typeof __propDef.events;
export type GiLightSabersSlots = typeof __propDef.slots;
export default class GiLightSabers extends SvelteComponentTyped<GiLightSabersProps, GiLightSabersEvents, GiLightSabersSlots> {
}
export {};
