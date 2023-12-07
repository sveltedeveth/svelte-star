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
export type GiAnimalHideProps = typeof __propDef.props;
export type GiAnimalHideEvents = typeof __propDef.events;
export type GiAnimalHideSlots = typeof __propDef.slots;
export default class GiAnimalHide extends SvelteComponentTyped<GiAnimalHideProps, GiAnimalHideEvents, GiAnimalHideSlots> {
}
export {};
