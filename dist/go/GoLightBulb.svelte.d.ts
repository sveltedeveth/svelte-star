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
export type GoLightBulbProps = typeof __propDef.props;
export type GoLightBulbEvents = typeof __propDef.events;
export type GoLightBulbSlots = typeof __propDef.slots;
export default class GoLightBulb extends SvelteComponentTyped<GoLightBulbProps, GoLightBulbEvents, GoLightBulbSlots> {
}
export {};
