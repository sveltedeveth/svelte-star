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
export type GiWineBottleProps = typeof __propDef.props;
export type GiWineBottleEvents = typeof __propDef.events;
export type GiWineBottleSlots = typeof __propDef.slots;
export default class GiWineBottle extends SvelteComponentTyped<GiWineBottleProps, GiWineBottleEvents, GiWineBottleSlots> {
}
export {};
