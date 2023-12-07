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
export type GiThreePointedShurikenProps = typeof __propDef.props;
export type GiThreePointedShurikenEvents = typeof __propDef.events;
export type GiThreePointedShurikenSlots = typeof __propDef.slots;
export default class GiThreePointedShuriken extends SvelteComponentTyped<GiThreePointedShurikenProps, GiThreePointedShurikenEvents, GiThreePointedShurikenSlots> {
}
export {};
