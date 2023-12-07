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
export type FaWineBottleProps = typeof __propDef.props;
export type FaWineBottleEvents = typeof __propDef.events;
export type FaWineBottleSlots = typeof __propDef.slots;
export default class FaWineBottle extends SvelteComponentTyped<FaWineBottleProps, FaWineBottleEvents, FaWineBottleSlots> {
}
export {};
